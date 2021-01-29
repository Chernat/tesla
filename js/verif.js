function validate_form(event, form) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }

    let emailInput = jQuery(form.inf_field_Email);
    let formMessage = jQuery(form).find('.form-message');

    formMessage.fadeOut();

    var rp = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/; // phone validator: xxx xxx xxxx
    var phoneValidated = true;
    var phone = jQuery(form).find('[name]').each(function (i, v) {
        var input = jQuery(this), // resolves to current input element.
            name = input.attr('name'),
            required = input.attr('required'),
            type = input.attr('type'),
            value = jQuery.trim(input.val());
        if ((type === 'phone' || name === 'phone' || name === 'inf_field_Phone5' || name === 'inf_field_Phone3') && value !== '' && !rp.test(value)) {
            phoneValidated = false;
        }
    });
    if (!phoneValidated) {
        msg = 'Phone number must be a valid USA or Canadian number, DO NOT include the country code';
        formMessage.text(msg);
        formMessage.fadeIn();
        return false;
    }

    if (emailcheck(emailInput.val())) {
        let submitInput = jQuery(form).find('input[type="submit"]');
        let loadingImg = jQuery(form).find('.loading-img');

        submitInput.attr('disabled', 'disabled');
        submitInput.addClass('disabled');
        loadingImg.show();

        let urlSearchParams = (new URLSearchParams(window.location.search));
        let email = jQuery(form.inf_field_Email).val();
        let click_id = urlSearchParams.get('clickid');
        var request_data = {
            email: email,
            verify: 'YCiICEUTYXKaSFIuXWR3',
            click_id: click_id,
            searchParams: urlSearchParams.toString()
        };
        jQuery.ajax({
            type: "POST",
            url: "/verify",
            data: request_data,
            cache: false,
            success: function (response) {
                var resp = JSON.parse(response);
                console.log(resp);
                if (resp.success === true) {
                    window.location.href = '/registration?hash=' + resp.data.hash;
                }
            },
            error: function (html) {

                var resp = JSON.parse(html.responseText);
                console.log(resp);

                if (resp.success === false) {
                    msg = resp.error.message;
                } else {
                    msg = 'There is a problem with the script, we cannot process your request';
                }

                loadingImg.hide();
                console.info('Hi error post');
                loadingImg.hide();
                formMessage.text(msg);
                formMessage.fadeIn();
                submitInput.removeAttr("disabled", "disabled");
                submitInput.removeClass('disabled');
            },
            always: function () {
                loadingImg.hide();
            }
        });
    } else {
        msg = 'The email address you entered is invalid';
        formMessage.text(msg);
        formMessage.fadeIn();
    }
}


function emailcheck(str) {
    var at = "@";
    var dot = ".";
    var lat = str.indexOf(at);
    var lstr = str.length;
    var ldot = str.indexOf(dot);
    if (str.indexOf(at) == -1) {
        return false;
    }
    if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
        return false;
    }
    if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr) {
        return false;
    }
    if (str.indexOf(at, (lat + 1)) != -1) {
        return false;
    }
    if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
        return false;
    }
    if (str.indexOf(dot, (lat + 2)) == -1) {
        return false;
    }
    if (str.indexOf(" ") != -1) {
        return false;
    }
    return true;
}


function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function iCreateCookie(cname, cvalue, expdays) {
    if (expdays) {
        var dt = new Date();
        dt.setTime(dt.getTime() + (expdays * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + dt.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = cname + "=" + cvalue + expires + "; path=/";
}

function iDeleteCookieCookie(cname) {
    document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function iReadCookie(c1) {
    c1 += "=";
    var ca = document.cookie.split(';');
    for (var j = 0; j < ca.length; j++) {
        var c = ca[j];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(c1) == 0) {
            return c.substring(c1.length, c.length);
        }
    }
    return null;
}

function iRetrieveCookieValue(c1) {
    cookievalue = iReadCookie(c1);					// read the cookie value

    if (cookievalue != null) {
        return cookievalue;							// if the value is not null, return it
    }

    return null;
}
