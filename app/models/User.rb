class User < ActiveRecord::Base

  has_attached_file :picture, default_url: "default.png", :styles => { :small => '156x156', :thumb => '100x100' }
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

  include PgSearch
  pg_search_scope :user_search,
                  against: [:username],
                  using: { tsearch: {:prefix => true} }


  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, length: { maximum: 14 }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, uniqueness: { case_sensitive: false }

  validates :password, confirmation: true
  validates :password_confirmation, presence: { :on => :create }

  validates_format_of :email, :with => /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/

  ################################################

  # People That I follow
  has_many(
    :follows,
    class_name: "Follow",
    foreign_key: :follower_id,
    primary_key: :id
  )

  has_many(
    :followees,
    through: :follows,
    source: :followee
  )

  ################################################

  # People that Follow Me
  has_many(
    :followings,
    class_name: "Follow",
    foreign_key: :followee_id,
    primary_key: :id
  )

  has_many(
    :followers,
    through: :followings,
    source: :follower
  )

  ################################################

  has_many(
    :posts,
    class_name: "Post",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :likes,
    class_name: "Like",
    foreign_key: :liker_id,
    primary_key: :id
  )


  def feed_posts(page_num)

    followees = self.followees

    followed_user_ids = [self.id]
    followees.each do |user|
     followed_user_ids << user.id
    end

    Post.includes(
      :author,
      :likes,
      :likers,
      comments: [:author])
      .where("author_id IN (?)", followed_user_ids)
      .order(created_at: :desc).page(page_num).per(4)
  end

  def num_followers
    followers.count
  end

  def num_followees
    followees.count
  end

  ################################################

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
