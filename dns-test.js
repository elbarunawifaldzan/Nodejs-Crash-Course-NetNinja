const dns = require("dns");

console.log("Servers:", dns.getServers());

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dns.resolveSrv("_mongodb._tcp.cluster0.m6iyesa.mongodb.net", (err, records) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(records);
});
