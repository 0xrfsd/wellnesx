// API == Server == Express == Mongoose == Bcrypt

let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

const JWT_SECRET = "**SEGREDO**";

let User = require("./models/User");
let Order = require("./models/Order");
let Commerce = require("./models/Commerce");

let cep = require("cep-promise");

const user = "ricardo";
const password = "Azd202020";
const database = "dbOne";
const server = `mongodb+srv://${user}:${password}@cluster0.xtsw7.mongodb.net/${database}?retryWrites=true&w=majority`;
const config = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(server, config).then(() => {
  console.log("Database connection successfully!");
});

const db = mongoose.connection;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/api/", (req, res) => {
  console.log("API is working!");
});

app.post("/register", async (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const psenha = req.body.senha;
  const tipo = req.body.tipo;
  const carrinho = req.body.carrinho;
  const cepreq = req.body.cepreq;

  const exists = await User.findOne({ email }).lean();

  const endereco = cep(cepreq)

  if (tipo.length == 0) {
    return res.json({ status: "error", error: "Seu tipo precisa ser definido" });
  }

  if (nome.length == 0) {
    return res.json({ status: "error", error: "Você precisa digitar seu nome" });
  }

  if (email.length == 0) {
    return res.json({ status: "error", error: "Você precisa digitar seu email" });
  }

  if (exists) {
    return res.json({
      status: "error",
      error: "This email have already been registered",
    });
  }

  if (psenha.length < 8) {
    return res.json({
      status: "error",
      error: "Sua senha precisa ter no minimo 8 digitos",
    });
  }

  const senha = await bcrypt.hash(psenha, 10);

  const user = new User({
    email: email,
    username: nome,
    senha: senha,
    tipo: tipo,
    cep: cepreq,
    carrinho: carrinho,
  });
  await user.save();

  const token = jwt.sign(
    {
      id: user.id,
      cep: user.cep,
      email: user.email,
      nome: user.username,
      tipo: user.tipo,
      carrinho: user.carrinho,
    },
    JWT_SECRET
  );

  return res.json({ status: "ok", data: token });
});

app.post("/cart", async (req, res) => {

  const changes = [{"novostatus": "horadonovostatus"}];
  const status = '';
  const commerceId = "commerceId";
  const userId = "6074c4189a48340c548a1199";
  const commerceLocation = {latitude: 1, longitude: 2};
  const userLocation = {latitude: 1, longitude: 2};
  const data = "T:090240:11/05/2021";
  const items = [
    {
      "id": "idproduto",
      "produto": "Leite",
      "qtd": 1,
      "valor": 8
    },
    {
      "id": "idproduto",
      "produto": "Alface",
      "qtd": 1,
      "valor": 4
    }
  ]

  const update = [commerceId, userId, commerceLocation, userLocation, data, items];

  await User.findByIdAndUpdate({_id: userId}, { carrinho: update }, {
    new: true,
    useFindAndModify: false,
    upsert: true // Make this update into an upsert
  });

  return res.json({ status: "ok", data: 'cart added'})
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  const user = await User.findOne({ email }).lean();

  if (email.length == 0) {
    return res.json({ status: "error", error: "Qual é o seu email?" });
  }

  if (!user) {
    return res.json({ status: "error", error: "Email invalido" });
  }

  if (senha.length == 0) {
    return res.json({ status: "error", error: "Qual é a sua senha?" });
  }

  if (await bcrypt.compare(senha, user.senha)) {
    const token = jwt.sign(
      {
        id: user._id,
        nome: user.username,
        email: user.email,
        tipo: user.tipo,
      },
      JWT_SECRET
    );

    return res.json({ status: "ok", data: token });
  } else {
    return res.json({ status: "error", error: "Sua senha está errada!" });
  }
});

app.post("/logingoogle", async (req, res) => {
  const email = req.body.email;
  const nome = req.body.nome;
  const id = req.body.id;
  const photoUrl = req.body.photoUrl;
  const tipo = "consumer";

  if (email.length == 0) {
    return res.json({ status: "error", error: "Email cannot be null" });
  }

  if (nome.length == 0) {
    return res.json({ status: "error", error: "Nome cannot be null" });
  }

  if (id.length == 0) {
    return res.json({ status: "error", error: "Id cannot be null" });
  }

  const token = jwt.sign(
    {
      id: id,
      nome: nome,
      email: email,
      photoUrl: photoUrl,
      tipo: tipo,
    },
    JWT_SECRET
  );

  return res.json({ status: "ok", data: token });

})

app.post("/order", async (req, res) => {
  const userId = req.body.userId;
  const commerceId = req.body.commerceId;
  const driverId = req.body.driverId;
  const orderObj = req.body.orderObj;
  const price = req.body.price;
  const status = req.body.status;

  const order = new Order({
    userId: userId,
    commerceId: commerceId,
    driverId: driverId,
    orderObj: orderObj,
    price: price,
    status: status,
  });
  await order.save();

  const token = jwt.sign(
    {
      userId: user.userId,
      commerceId: user.commerceId,
      driverId: user.driverId,
      orderObj: user.orderObj,
      price: user.price,
      status: user.status,
    },
    JWT_SECRET
  );

  return res.json({ status: "order registered!", data: token });
});

app.post("/commerce", async (req, res) => {
  const image = req.body.image;
  const nome = req.body.nome;
  const categoria = req.body.categoria;
  const descricao = req.body.descricao;
  const cnpj = req.body.cnpj;
  const cidade = req.body.cidade;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const categoriasObj = req.body.categoriasObj;
  const delivery = req.body.delivery;
  const pedidoMinimo = req.body.pedidoMinimo;
  const abre = req.body.abre;
  const fecha = req.body.fecha;

  const commerce = new Commerce({
    image: image,
    nome: nome,
    categoria: categoria,
    descricao: descricao,
    cnpj: cnpj,
    cidade: cidade,
    latitude: latitude,
    longitude: longitude,
    categoriasObj: categoriasObj,
    delivery: delivery,
    pedidoMinimo: pedidoMinimo,
    abre: abre,
    fecha: fecha,
  });
  await commerce.save();

  const token = jwt.sign(
    {
      image: commerce.image,
      nome: commerce.nome,
      categoria: commerce.categoria,
      descricao: commerce.descricao,
      cnpj: commerce.cnpj,
      latitude: commerce.latitude,
      longitude: commerce.longitude,
      categoriasObj: commerce.categoriasObj,
      delivery: commerce.delivery,
      pedidoMinimo: commerce.pedidoMinimo,
      abre: commerce.abre,
      fecha: commerce.fecha,
    },
    JWT_SECRET
  );

  return res.json({ status: "commerce registered!", data: token });
});

app.get('/emailtosend', (req, res) => {
  const receivers = ['9q9o6b3@gmail.com', 'brenoborgesfranca@gmail.com']

  res.send(receivers)

})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});