import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  @Render('views/index.html')
  getHello2(): {message: string, title: string} {
    return this.appService.getHello2();
  }

  @Get('home')
  @Render('views/home.html')
  getHome(): {} {
    return this.appService.getHome();
    }
  
  @Get('about-us')
  @Render('views/about-us.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
    }

}
