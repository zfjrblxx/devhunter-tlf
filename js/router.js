const Router = {

    routes: {},

    register(name, render){

        this.routes[name] = render;

    },

    go(name){

        const screen = this.routes[name];

        if(screen){

            screen();

        }

    }

};
