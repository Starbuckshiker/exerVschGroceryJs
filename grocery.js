var shopper = {
    name: "John smith",
    age: 59,
    member: true,
    groceryCart: ["milk", "eggs", "bread", "cheese", "apples"],
    fullName: function() {
        return this.name;
    }
     }
console.log(shopper)
function getShopper(shopper) {
    for (var i = 0; i < shopper.length; i++) {
    console.log(shopper[i].name + " is " + shopper[i].age + " years old!");
  }
}
getShopper(shopper);