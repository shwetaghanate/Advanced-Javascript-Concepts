/*To print Document values using Jquery// 
$(document).ready(function(){
    console.log("Hello to Jquery World !!!");
    console.log($(document));
});*/

//Adding html text to DOM in JQuery 
/*$(document).ready(function(){
    console.log("Shweta will work as Full stack developer in Mnc firm soon");
    //$('body').text('<b>I will get a package of 15 lpa soon with nc firm and IT /Finance domain soon.</b>');

    $('body').html('<b>I will get a package of 15 lpa soon with MNC firm and IT /Finance domain soon.</b>');
});*/

//mango
// $(document).ready(function(){
//     // $('#mango').addClass('highlight');
//     // $('#apple').addClass('highlight1');
//     // $('#container > .solid').addClass('solid');
//     // $('.non-solid').addClass('non-solid');

//     $('#container >> .non-solid').addClass('highlight');
// });
var cart = 0;

function addItem(id, name, description, price, moreInfo) {
    let html = "";

    //Template HTML //
    html += '<div class="item1" data-id="' + id + '">';
    html += '<div class="name" style= background: aliceblue;>' + name + '</div>';
    html += '<img src="assess/beach.jpg" alt="Image"></img>';
    html += '<div class="description">' + description + '</div>';
    html += '<div class="price">' + price + '</div>';
    html += '<button class="item-add">Add to Cart</button>';
    html += '<button class="item-remove">Remove</button>';
    html += '<br/>';
    html += '<a class="more-info-link" href="#">More info</a>' + moreInfo + '</div>';
    html += '</div>';
    $('#container6').prepend(html);
}
$(document).ready(function() {
    // $('#container2').addClass('highlight2');
    // $('#container2 input:required').addClass('highlight1');
    // $('#container2 input[placeholder*="Name"').addClass('highlight');

    // //console.log($('#container3').find('.hot').children('.non-solid'));
    // // $('#container3').find('.hot').children().first().last().addClass('highlight3');
    // $('#snow').parent().find('.title').addClass('highlight3');
    // console.log($('#snow').parents());

    $('.box').on('click', '.box-button', function() {

        var a = $(this).parent().toggleClass('highlight3');
        a[0].style.backgroundColor = "pink";
    });
    $('#select-menu').on('change', function() {
        let name = $('#select-menu option:selected').val();
        var text = $('#select-menu option:selected').text();
        let price = $('#select-menu option:selected').data('price');
        console.log(price);

        if (name) {
            $('#feedback').text('you are signing a text ' + name + 'text is ' + text + " and price is " + price)
        } else {
            $('#feedback').empty();
        }

        //alert("hello ");

    })

    /// 
    $('#input-name').on('keyup', function() {
        let name = $(this).val();
        $('#feedback-msg').text('Please to meet you!! ' + name);


    });

    // $('a').on('click', function(evt) {
    //     debugger;
    //     evt.preventDefault();
    //     $('#feedback-msg').text('You are awesome!!!');
    //     //$(this).prevantDefault();
    // });


    //////Adding Cards dynamicaaly on button click in HTML 5 and Jquery ////
    //$('#button-create-item').on('click', function(param) {
    /*let value = $('#input-create-item').val();
    // alert(value);
    $('#input-create-item').val('');
    // let html = "";*/

    // html += '<div class="item1">';
    // html += '<div class="name" style= background: aliceblue;>' + value + '</div>';
    // html += '<img src="assess/beach.jpg" alt="Image"></img>';
    // html += '<div class="description">';
    // html += 'Shweta will get in to MNC firm as Full stack developer with 15 lpa package soon. Technologies will be Javascript and Python';
    // html += '</div>';
    // html += '<div class="price">599</div>';
    // html += '<button class="item-add">Add to Cart</button>';
    // html += '<button class="item-remove">Remove</button>';
    // html += '<br/>';
    // html += '<a class="more-info-link" href="#">More info</a>';
    // html += '<div class="more-info">Lorem ipsum color css </div>';
    // html += '</div>';

    // //insert the element into the container
    // $('#container6').prepend(html);
    // // $('item-add').remove(html);
    //  });

    ///MAIN CONTAINER REMOVE ELEMENT ADDED//
    //  $('#container6 .item-remove').on('click', function(){
    //    alert('hey')
    //    var a = $(this).parent();
    //    a.remove();
    //   // $(this).remove();
    //  })

    //Code for event DELEGATION TOBE ADDED FOR ALL THE REMOVE BUTTON ON THE CONATINER WHICH IS ADDED DYNAMICALLY//
    $('#container6').on('click', '.item-remove', function() {
        $(this).parent().remove();
    })
    $('#container6').on('click', '.more-info-link', function(e) {
        e.preventDefault();
        //   $(this).parent().find('.More-Info').toggle(580); //fadeIn
        //  $(this).parent().find('.More-Info').fadeToggle(580);
        //$(this).parent().find('.more-info').slideToggle(580);
        //  $('.More-Info').css('display', 'block');
        $(this).parent().find('.more-info').slideToggle(425);
        //  $(this).parent().find('.more-info').fadeOut('slow');


        $(this).animate({ "opacity": 0.5, "margin-left": 10 }, 100)
            .animate({ "opacity": 1, "margin-left": 0 }, 100);

    })
    let count = 0;
    var getData = function() {
        console.log("key pressed..." + count++)
    }

    let doSomeMagic = function(fn, delay) {
        var timer;

        return function() {
            clearTimeout(timer);

            timer = setTimeout(() => {
                getData();
            }, delay);
        }
    };
    let betterFunction = doSomeMagic(getData, 300);


    $.ajax('data/item.json', {
            dataType: 'json',
            contentType: 'application/json',
            cache: false
        })
        .done(function(response) {
            let items = response.items;

            items.forEach(function(item) {
                console.log(item);
                addItem(item.id, item.name, item.description, item.price, item.moreInfo);
            })
            var promise1 = new Promise(function(onFullfilled, onRejected) {
                if (response.name == "Shweta") {
                    onFullfilled(444);
                } else {
                    onRejected("Error");
                }
            })
            promise1.then(function(msg) {
                console.log("Hello to Ajax and Async operations" + msg);
            }).catch(function(error) {
                console.log("hey you got " + error);
            })
        })
        .fail(function(request, errorType, errorMessage) {
            console.log(errorMessage)
        })
        .always()

    $('#container6').on('click', '.item-add', function() {
        //  debugger;
        let id = $(this).parent().data('id');
        console.log(id);

        $.ajax('data/addToCart.json', {
                type: 'post',
                data: { id: id },
                dataType: 'json',
                contentType: 'application/json'
            })
            .done(function(response) {
                if (response.message == "Success") {
                    console.log(response.price);
                    cart += response.price;
                    //alert(cart);
                    debugger;
                    // var a = $('#cart-container')[0]
                    // a.innerText = "$" + cart;
                    $('#cart-container').text('$' + cart);
                }
            })
            .fail(function(error, errorType) {
                console.log(error);
            })
    });

    $('#news-checkbox').on('change', function() {
        // debugger;
        /*if ($(this)[0].checked == true) {
            $('#checkbox-frequency')[0].style.display = "block";
        } else {
            $('#checkbox-frequency')[0].style.display = "none";
        }*/
        if ($(this).is(':checked')) {
            $('#checkbox-frequency').fadeIn()
        } else {
            $('#checkbox-frequency').fadeOut()
        }
    })
    $('#news-checkbox').trigger('change');

    $('#cart-form').on('submit', function(event) {

        let data = {
            form: $(this).serialize(),
            price: cart
        }
        console.log("data" + data.form);
        event.preventDefault();
        $.ajax($(this).attr('action'), {
                type: 'post',
                data: data
            })
            .done(function(response) {
                debugger;
                $('#feedback').text(response.message);
                alert(response.message + data.form);
            })

    })
});