const DB_URL = process.env.DATABASE_URL || "postgres://lktplgntkrtlaq:6d80f45ea26edc98170bd39860235bfdb96605a993b42b830bd2102a2ebe7bea@ec2-54-74-60-70.eu-west-1.compute.amazonaws.com:5432/db4tar6tepepve";

const DB_CONFIG = {
    uri: DB_URL,
    host: "ec2-54-74-60-70.eu-west-1.compute.amazonaws.com",
    user: "lktplgntkrtlaq",
    port: "5432",
    password: "6d80f45ea26edc98170bd39860235bfdb96605a993b42b830bd2102a2ebe7bea",
    database: "db4tar6tepepve",
    tableVacancies: "vacancies",
    tableUsers: "users"
}

module.exports = DB_CONFIG;
