function smoothScroll(target, duration){
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = document.documentElement.scrollTop || document.body.scrollTop;; // Current vertical scroll position
        var distance = targetPosition - startPosition;
        var startTime = null;
    
        function animation(currentTime){
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0,run);
            if(timeElapsed < duration) requestAnimationFrame(animation);
            
        }
    
        function ease(t, b, c, d) {
            t /= d / 2; // Normalize time to half duration
            if (t < 1) return c / 2 * t * t + b; // Ease in for the first half
            t--; // Adjust time for the second half
            return -c / 2 * (t * (t - 2) - 1) + b; // Ease out for the second half
        }
    
        requestAnimationFrame(animation);
        
    }
    var section1 = document.querySelector('.section1');
    section1.addEventListener('click', function(){
        smoothScroll('.section2', 1000);
    });
    var section2 = document.querySelector('.section2');
    section2.addEventListener('click', function(){
        smoothScroll('.section1', 1000);
    })