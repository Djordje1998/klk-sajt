$('#dodajForm').submit(function () {
    event.preventDefault();
    console.log("Dodavanje");
    const $form = $(this);
    const $input = $form.find('input', 'select', 'button', 'textarea');

    const serijalizacija = $form.serialize();
    console.log(serijalizacija);

    $input.prop('disabled', true);

    req = $.ajax({
        url: "handler/add.php",
        type: "post",
        data: serijalizacija
    });

    req.done(function (res, textStatus, jqXHR) {
        if (res == "Success") {
            alert("Kolokvijum uspesno zakazan");
            console.log("Dodat kolokvijum");
            location.reload(true);
        } else {
            console.log("Kolokvijum nije dodat" + res);
        }
        console.log(res);
    });

    req.fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Sledeca greska se desila>' + textStatus, errorThrown);
    });
});

$('#btn-obrisi').click(function () {
    console.log("Brisanje");

    const checked = $('input[name=checked-donut]:checked');
    req = $.ajax({
        url: 'handler/delete.php',
        type: 'post',
        data: { 'id': checked.val() }
    });

    req.done(function (res, textStatus, jqXHR) {
        if (res == "Success") {
            checked.closest('tr').remove();
            alert('Obrisan kolokvijum');
            console.log('Obrisan');
        } else {
            console.log("Kolokvijum nije obrisan " + res);
            alert("Kolokvijum nije obrisan ");
        }
        console.log(res);
    });

});