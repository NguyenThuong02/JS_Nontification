
function toast({title = '', message = '', type = 'info', duration = 3000}){
    const main = document.getElementById('toast');     
    if (main) {
        const toast = document.createElement('div');//Tạo cái thẻ div cha

            // Auto remove toast
        const autoRemove = setTimeout(function() {
            main.removeChild(toast); //Remove (vì khi chạy xong nó chỉ ẩn đi thôi chứ ko biến mất)
        }, duration + 1000);

        // Remove toast when click close
        toast.onclick = function(e){ //click vào chính class này hoặc con của nó
            if(e.target.closest('.toast__close')){ //closest: tìm class xem có class này hay ko (nếu ko có chuyển sang thằng cha)
                main.removeChild(toast);
                clearTimeout(autoRemove); //Xoá cái setTimeout
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-bug'
        }
        const icon = icons[type]; //Dựa vào type để lấy icon tương đương
        const delay = (duration / 1000).toFixed(2); //Để lấy số giây (vd: 3000 => 3)

        toast.classList.add('toast', `toast--${type}`); //tạo class toast
        toast.style.animation = `slideInleft ease 0.5s, fadeOut linear 2s ${delay}s forwards`; //add css animation

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3>${title}</h3>
                <p>${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast); //Đưa toast vào trong main

    }                                                                                                        
}


function showSuccessToast(){
    toast({ //object
        title: 'Success',
        message: 'Anyone with access ca. view your invited visitors.',
        type: 'success',
        duration: 1000
    });
}

function showErrorToast(){
    toast({ //object
        title: 'Error',
        message: 'Anyone with access ca. view your invited visitors.',
        type: 'error',
        duration: 3000
    });
}
