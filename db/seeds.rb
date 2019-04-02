# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo_user = User.new({username:"Tyler Bisson", password:'password'})
demo_user.save 
demo_user.portrait.attach(io: File.open("app/assets/images/tyler.jpeg"),
    filename: "tyler.jpeg")

r1 = Recording.new({title:"Leaf Crackle", description:"cool beat", user_id: demo_user.id})
r1.save! 
r1.art.attach(io: File.open("app/assets/images/thats_spooky.png"),
    filename: "thats_spooky.png")
r1.audio.attach(io: File.open("app/assets/audio/leaf_crackle.mp3"),
    filename: "leaf_crackle.mp3")

r2 = Recording.new({title:"Scenic Court", description:"cool beat", user_id: demo_user.id})
r2.save! 
r2.art.attach(io: File.open("app/assets/images/man_cub.jpg"),
    filename: "man_cub.jpg")
r2.audio.attach(io: File.open("app/assets/audio/scenic_court.mp3"),
    filename: "scenic_court.mp3")

r3 = Recording.new({title:"leaf peeper, half asleep", description:"cool beat", user_id: demo_user.id})
r3.save! 
r3.art.attach(io: File.open("app/assets/images/staycation.jpg"),
    filename: "staycation.jpg")
r3.audio.attach(io: File.open("app/assets/audio/leef_peeper.m4a"),
    filename: "leef_peeper.m4a")

r4 = Recording.new({title:"Harrisonburg", description:"cool beat", user_id: demo_user.id})
r4.save! 
r4.art.attach(io: File.open("app/assets/images/dataloss.jpg"),
    filename: "dataloss.jpg")
r4.audio.attach(io: File.open("app/assets/audio/harrisonburg.m4a"),
    filename: "harrisonburg.m4a")

r5 = Recording.new({title:"Milk Weed", description:"cool beat", user_id: demo_user.id})
r5.save! 
r5.art.attach(io: File.open("app/assets/images/rube.png"),
    filename: "rube.png")
r5.audio.attach(io: File.open("app/assets/audio/milkweed.m4a"),
    filename: "milkweed.m4a")