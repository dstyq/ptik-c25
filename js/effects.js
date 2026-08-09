document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // EASTER EGG (KODE RAHASIA "PTIK")
    // ==========================================
    const secretCode = "ptik";
    let inputSequence = "";
    
    document.addEventListener('keydown', (e) => {
        // Biar nggak kepencet pas lagi ngetik di form/search bar
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        // Gabungin huruf yang diketik
        inputSequence += e.key.toLowerCase();
        
        // Jaga panjang karakter biar nggak kepanjangan di memori
        if (inputSequence.length > secretCode.length) {
            inputSequence = inputSequence.slice(-secretCode.length);
        }
        
        // Kalau ketikannya beneran "ptik"
        if (inputSequence === secretCode) {
            // Tembakin confetti-nya!
            confetti({
                particleCount: 200, 
                spread: 120,        
                origin: { y: 0.6 }, 
                colors: ['#7dd3fc', '#c084fc', '#ec4899', '#ffffff'] 
            });
            
            inputSequence = ""; 
        }
    });

});

