# User.create!(username: "guest",
#              email: "guest@lol.com",
#              password: "superpassword",
#              password_confirmation: "superpassword",
#              picture: File.open("#{Rails.root}/app/assets/images/default_seeds/guest.jpg")
#             )
#
# User.create!(username: "username",
#              email: "vin@lol.com",
#              password: "superpassword",
#              password_confirmation: "superpassword",
#              picture: File.open("#{Rails.root}/app/assets/images/default_seeds/vin.jpeg")
#             )

300.times do
  numb = Random.rand(22) + 1
  User.create!(username: (0...10).map { ('a'..'z').to_a[rand(26)] }.join,
              email: (0...10).map { ('a'..'z').to_a[rand(26)] }.join + "@lol.com",
              password: "password",
              password_confirmation: "password",
              picture: File.open("#{Rails.root}/app/assets/images/default_seeds/aa#{numb}.jpg"))
end
