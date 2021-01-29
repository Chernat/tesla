var modalIsShow = false;

function hideCustomPopup() {
    var modal = document.querySelector('#customPopUpUID');
    if (modal) {
        modal.classList.remove('open-custom-modal');
        setTimeout(function (e) {
            modal.style.display = 'none';
            modalIsShow = false;
        }, 200);
    }
}

function showCustomPopup() {
    var modal = document.querySelector('#customPopUpUID');

    if (modal && video.show) {
        modalIsShow = true;
        modal.style.display = 'block';
        modal.style.zIndex = '100000';
    }
}

document.addEventListener('DOMContentLoaded', function (e) {
    var modal = document.querySelector('#customPopUpUID-modal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === e.currentTarget) {
                if (modalIsShow) hideCustomPopup();
            }
        });
    }
    document.querySelector('#close-modal').addEventListener('click', (e) => {
        hideCustomPopup();
    });
    window.addEventListener('blur', function (e) {
        if (modalIsShow) {
            return;
        }
        showCustomPopup();
    });
    window.addEventListener('mousemove', function (e) {
        function show() {
            if (modalIsShow) {
                return;
            }
            showCustomPopup();
        }
        var x = e.x,
            y = e.y,
            width = window.innerWidth,
            height = window.innerHeight;
        //console.log('mousemove', x , y);
        var pad = 15;
        if (x < pad) {
            show();
        }
        if (y < pad) {
            show();
        }
        if (x > width - pad) {
            show();
        }
        if (y > height - pad) {
            show();
        }
    });
    window.addEventListener('focus', function (e) {
        if (modalIsShow) {
            return;
        }
        showCustomPopup();
    });
    document.addEventListener('visibilitychange', (e) => {
        const visibility = document.visibilityState;
        switch (visibility) {
            case 'hidden':
                if (modalIsShow) {
                    return;
                }
                showCustomPopup();
                break;
            default:
                if (modalIsShow) {
                    return;
                }
                showCustomPopup();
                break;
        }
    });
});
