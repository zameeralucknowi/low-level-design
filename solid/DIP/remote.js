// higher modules should not depend on lower modules

class IBattery{
    work(){}
}

class EverReadyBattery extends IBattery{
    work(){
        console.log('working with everready')
    }
}

class DuracellBattery extends IBattery{
    work(){
        console.log('working with duracell')
    }
}

class RemoteController{
    constructor(battery){
        this.battery = battery;
    }

    changeChannel(){
        this.battery.work()
    }
}

const remoteController = new RemoteController(new DuracellBattery());
remoteController.changeChannel()

 