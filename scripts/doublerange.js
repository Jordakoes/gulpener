// function addAll() {
//     var sum = 0
    
//     $('.add').each(function(){
//       sum += isNaN(this.value) || $.trim(this.value * 10) === '' ? 0 : parseFloat(this.value);
//     });
  
//     $('#total').html(sum);
//   }
  
//   $('.add').change(addAll);

function addAll() {
    var sum = 0;

    sum = document.querySelector(".add1").this.value + document.querySelector(".add2").this.value;

    document.querySelector("#total").html(sum);
}

//functie moet aangeroepen worden door (addAll)!
//dit doen door on.change javascript (googlen!)