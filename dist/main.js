"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const passport = require("passport");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.use(session({
        secret: 'asiodasjoddjdoasddasoidjasiodasdjaiossdd',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000,
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(Number(process.env.PORT));
}
bootstrap();
//# sourceMappingURL=main.js.map