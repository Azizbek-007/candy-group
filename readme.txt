npx sequelize-cli model:generate --name user --attributes username:string,password:string,role:string
npx sequelize-cli model:generate --name Supervisor --attributes firstName:string,lastName:string,username:string,chatId:integer,groupChatId:string

npx sequelize-cli model:generate --name video --attributes url:string,date:string,supervisor:string

npx sequelize-cli model:generate --name botsettings --attributes startHour:integer,endHour:integer,startMinute:integer,endMinute:integer

npx sequelize-cli model:generate --name job --attributes video_link:string,user_id:integer,send_date:string


npx sequelize-cli seed:generate --name demo-ceo