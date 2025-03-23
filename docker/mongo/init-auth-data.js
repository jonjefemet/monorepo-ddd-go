db = db.getSiblingDB('authdb');

// 1. Permisos
const permissions = [
  { _id: "CREATE_QUOTES", description: "Can create quotes" },
  { _id: "READ_QUOTES", description: "Can read quotes" },
];

db.permissions.insertMany(permissions);

// 2. Roles
const roles = [
  {
    name: "QUOTE_MANAGER",
    permissions: ["CREATE_QUOTES", "READ_QUOTES"]
  },
  {
    name: "QUOTE_VIEWER",
    permissions: ["READ_QUOTES"]
  }
];

db.roles.insertMany(roles);

// 3. Usuarios
const users = [
  {
    username: "manager",
    password: "1234", // <-- en producción usar bcrypt
    email: "manager@example.com",
    roles: ["QUOTE_MANAGER"]
  },
  {
    username: "viewer",
    password: "1234",
    email: "viewer@example.com",
    roles: ["QUOTE_VIEWER"]
  }
];

db.users.insertMany(users);