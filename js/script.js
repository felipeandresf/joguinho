const mario = document.querySelector('.mario');
        const pipe = document.querySelector('.pipe');

        const jump = () => {
            mario.classList.add('jump');
            setTimeout(() => {
                mario.classList.remove('jump');
            }, 500);
        }

        document.addEventListener('keydown', jump);

        const loop = setInterval(() => {
            const pipePosition = pipe.offsetLeft;
            const marioPosition = window.getComputedStyle(mario).bottom.replace('px','') ;


            console.log(marioPosition);
            if (pipePosition <= 120 &&marioPosition < 90){
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`
            }
            // Lógica adicional pode ser adicionada aqui para verificar colisões ou outras ações
        }, 10);
