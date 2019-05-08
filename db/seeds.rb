# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Recording.destroy_all

# HOME PAGE USERS AND RECORDINGS 
#remember open not File.open

demo_user2 = User.new({username:"DJ Deeon", password:'password'})
demo_user2.save 
demo_user2.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/deeon.png"),
    filename: "deeon.png")
demo_user2_r = Recording.new({title:"2 B Free", description:"cool beat", user_id: demo_user2.id})
demo_user2_r.save! 
demo_user2_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/2+B+free.jpg"),
    filename: "2+B+free.png")
demo_user2_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/01+2+B+Free.mp3"),
    filename: "01+2+B+Free.mp3")

demo_user3 = User.new({username:"Music 4 Dogs", password:'password'})
demo_user3.save 
demo_user3.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/brad.png"),
    filename: "brad.png")
demo_user3_r = Recording.new({title:"piper maru", description:"cool beat", user_id: demo_user3.id})
demo_user3_r.save! 
demo_user3_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/piper+maru.jpg"),
    filename: "piper+maru.png")
demo_user3_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/piper+maru.m4a"),
    filename: "piper+maru.m4a")

demo_user4 = User.new({username:"Palmboman II", password:'password'})
demo_user4.save 
demo_user4.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/palm.png"),
    filename: "palm.png")
demo_user4_r = Recording.new({title:"ALOHAnet", description:"cool beat", user_id: demo_user4.id})
demo_user4_r.save! 
demo_user4_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/ALOHAnet.jpg"),
    filename: "ALOHAnet.png")
demo_user4_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/03+ALOHAnet.mp3"),
    filename: "03+ALOHAnet.mp3")

demo_user5 = User.new({username:"DJ Central", password:'password'})
demo_user5.save 
demo_user5.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/central.png"),
    filename: "central.png")
demo_user5_r = Recording.new({title:"DRIVE (DJ Sports Club Mix)", description:"cool beat", user_id: demo_user5.id})
demo_user5_r.save! 
demo_user5_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/drive.jpg"),
    filename: "drive.jpg")
demo_user5_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/DRIVE+(DJ+Sports+Club+Mix).mp3"),
    filename: "DRIVE+(DJ+Sports+Club+Mix).mp3")

demo_user6 = User.new({username:"Washington Phillips", password:'password'})
demo_user6.save 
demo_user6.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/wash.png"),
    filename: "wash.png")
demo_user6_r = Recording.new({title:"Lift Him Up That's All", description:"cool beat", user_id: demo_user6.id})
demo_user6_r.save! 
demo_user6_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/lift+him+up+thats+all.jpg"),
    filename: "lift+him+up+thats+all.png")
demo_user6_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/11+Lift+Him+Up+That's+All.mp3"),
    filename: "11+Lift+Him+Up+That's+All.mp3")

demo_user7 = User.new({username:"Leonce", password:'password'})
demo_user7.save 
demo_user7.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/leonce.png"),
    filename: "leonce.png")
demo_user7_r = Recording.new({title:"Jeremih - Impatient (Leonce Bounce Mix)", description:"cool beat", user_id: demo_user7.id})
demo_user7_r.save! 
demo_user7_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/Impatient+(Leonce+Bounce+Mix).jpg"),
    filename: "Impatient+(Leonce+Bounce+Mix).png")
demo_user7_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/07+Jeremih+-+Impatient+(Leonce+Bounce+Mix).mp3"),
    filename: "07+Jeremih+-+Impatient+(Leonce+Bounce+Mix).mp3")

demo_user8 = User.new({username:"Hiroshi Yoshimura (吉村弘)", password:'password'})
demo_user8.save 
demo_user8.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/hirosh.jpg"),
    filename: "hirosh.jpg")
demo_user8_r = Recording.new({title:"Singing Stream (Spring Mix)", description:"cool beat", user_id: demo_user8.id})
demo_user8_r.save! 
demo_user8_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/Singing+Stream+(Spring+Mix).jpg"),
    filename: "Singing+Stream+(Spring+Mix).png")
demo_user8_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/02+Singing+Stream+(Spring+Mix).mp3"),
    filename: "02+Singing+Stream+(Spring+Mix).mp3")

demo_user9 = User.new({username:"Roc Marciano", password:'password'})
demo_user9.save 
demo_user9.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/roc.png"),
    filename: "roc.png")
demo_user2_r = Recording.new({title:"The Horse's Mouth", description:"cool beat", user_id: demo_user9.id})
demo_user2_r.save! 
demo_user2_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/the+horses+mouth.jpg"),
    filename: "the+horses+mouth.png")
demo_user2_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/01.+The+Horse's+Mouth+(Prod.+Preservation).mp3"),
    filename: "01.+The+Horse's+Mouth+(Prod.+Preservation).mp3")

demo_user10 = User.new({username:"Delroy Edwards", password:'password'})
demo_user10.save 
demo_user10.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/delroy.png"),
    filename: "delroy.png")
demo_user10_r = Recording.new({title:"4 Club Use Only", description:"cool beat", user_id: demo_user10.id})
demo_user10_r.save! 
demo_user10_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/4+club+use+only.jpg"),
    filename: "4+club+use+only.png")
demo_user10_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/01+For+Club+Use+Only+(Original+Mix).mp3"),
    filename: "01+For+Club+Use+Only+(Original+Mix).mp3")

demo_user11 = User.new({username:"Terekke", password:'password'})
demo_user11.save 
demo_user11.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/terekke.png"),
    filename: "terekke.png")
demo_user11_r = Recording.new({title:"BB2", description:"cool beat", user_id: demo_user11.id})
demo_user11_r.save! 
demo_user11_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/BB2.jpg"),
    filename: "BB2.png")
demo_user11_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/02+BB2.mp3"),
    filename: "02+BB2.mp3")

demo_user12 = User.new({username:"Gesloten Cirkel", password:'password'})
demo_user12.save 
demo_user12.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/gesloten.png"),
    filename: "gesloten.png")
demo_user12_r = Recording.new({title:"Submit X", description:"cool beat", user_id: demo_user12.id})
demo_user12_r.save! 
demo_user12_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/submit+x.jpg"),
    filename: "submit+x.jpg")
demo_user12_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/03+Submit-X.mp3"),
    filename: "03+Submit-X.mp3")

demo_user13 = User.new({username:"The Coneheads", password:'password'})
demo_user13.save 
demo_user13.portrait.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/artists/coneheadsprofile.png"),
    filename: "coneheadsprofile.png")
demo_user13_r = Recording.new({title:"OUT OF CONETROL", description:"cool beat", user_id: demo_user13.id})
demo_user13_r.save! 
demo_user13_r.art.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/art/coneheads.jpg"),
    filename: "coneheads.png")
demo_user13_r.audio.attach(io: open("https://s3.amazonaws.com/stereophonic-cumulonimbus-seed/full+stack+assets/recordings/01+OUT+OF+CONETROL.mp3"),
    filename: "01+OUT+OF+CONETROL.mp3")

# DEMO USER 
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