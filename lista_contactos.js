var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Gate",
    number: "809-809-8090",
    address: ["multiples", "direcciones"]
};

friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "444-555-6666",
    address: ["Como vamos", "Multiple direciones"]
};

var list = function(obj) {
    for(var pao in obj) {
        console.log(pao);
    };
};

var search = function(name) {
  for(var pao in friends) {
    if(friends[pao].firstName === name) {
      console.log(friends[pao]);
      return friends[pao];
    }
  }
};

list(friends);
search("Steve");
