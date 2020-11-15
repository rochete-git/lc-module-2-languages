console.log("************** DELIVERABLE 05 *********************");
console.log("*************** Slot Machine *********************");

// Slot Machine

class SlothMachine {    
    private counter : number;
    private rouletteOne : boolean;
    private rouletteTwo : boolean;
    private rouletteThree : boolean;

    constructor () {
        this.counter = 0;
    };

    play () {
        this.counter++;
        this.rouletteOne = Math.random() <= 0.5;
        this.rouletteTwo = Math.random() <= 0.5;
        this.rouletteThree = Math.random() <= 0.5;

        if (this.rouletteOne && this.rouletteTwo && this.rouletteThree) {
            console.log(`Congratulations!!!. You won ${this.counter} coins!!`);
            this.counter = 0;
        } else {
            console.log(`Good luck next time!!`);
        };
    };
};

const machine1 = new SlothMachine();

for (let i = 0; i < 20; i++) {
    machine1.play();
};
