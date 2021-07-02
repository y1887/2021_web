import mongoose from 'mongoose';
import dotenv from 'dotenv-defaults';
import User from './models/user.js'
import Product from './models/product.js'

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((res) => console.log("mongo db connection created"));

const db = mongoose.connection;
db.on("error", err=> console.log(err));
db.once("open", async () => {
  await saveProduct("威士忌可樂", 200);
  await saveProduct("威士忌沙瓦", 250);
  await saveProduct("教父", 200);
  await saveProduct("琴通寧", 200);
  await saveProduct("馬丁尼", 250);
  await saveProduct("飛行", 250);
  await saveProduct("綠寶石冰酒", 250);
  await saveProduct("側車", 250);
  await saveProduct("床笫之間", 250);
  await saveProduct("柯夢波丹", 250);
  await saveProduct("黑俄羅斯", 250);
  await saveProduct("XYZ", 250);
  await saveProduct("自由古巴", 250);
  await saveProduct("波士頓冰酒", 250);
  await saveProduct("西班牙魔鬼", 250);
  await saveProduct("龍舌蘭日落", 250);
  await saveProduct("瑪格麗特", 250);
  await saveProduct("鬥牛士", 250);
  await saveProduct("長島冰茶", 300);
  await saveProduct("海尼根", 120);
  await saveProduct("百威", 120);
  await saveProduct("可樂娜", 130);
  await saveProduct("台灣金牌啤酒", 90);
  await saveProduct("雷科德精釀啤酒系列", 180);
  await saveProduct("CIDER精釀啤酒系列", 180);
  await saveProduct("可樂", 80);
  await saveProduct("雪碧", 80);
  await saveProduct("蘋果西打", 80);
  await saveProduct("開瓶費", 1000);
  await saveProduct("清潔費", 1000);
});

const saveUser = async (name, password) => {
const existing = await User.findOne({ name }); if (existing) throw new Error(`data ${name} exists!!`); try {
    const newUser = new User({ name, password });
    console.log("Created user", newUser);
    return newUser.save();
  } catch (e) { throw new Error("User creation error: " + e); }
};

const saveProduct = async (label, price) => {
const existing = await Product.findOne({ label }); if (existing) throw new Error(`data ${label} exists!!`); try {
    const newProduct = new Product({ label, price });
    console.log("Created product", newProduct);
    return newProduct.save();
  } catch (e) { throw new Error("Product creation error: " + e); }
};