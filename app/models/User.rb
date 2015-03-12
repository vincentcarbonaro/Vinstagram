class User < ActiveRecord::Base

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, uniqueness: true

  # People That I follow
  has_many(
    :follows,
    class_name: "Follow",
    foreign_key: :follower_id,
    primary_key: :id
  )

  has_many(
    :followed_users,
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

  # create_table "follows", force: :cascade do |t|
  #   t.integer  "follower_id", null: false
  #   t.integer  "followee_id", null: false
  #   t.datetime "created_at"
  #   t.datetime "updated_at"
  # end

  has_many(
    :posts,
    class_name: "Post",
    foreign_key: :author_id,
    primary_key: :id
  )

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
