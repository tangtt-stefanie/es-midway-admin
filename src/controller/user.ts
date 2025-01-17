import { Body, Controller, Inject, Post } from '@midwayjs/core'
import { User } from '../entity/user'
import { UserService } from '../service/user'
import { BaseController } from './base'

@Controller('/user')
export class UserController extends BaseController {
  @Inject()
  service: UserService

  @Post('/list')
  async list() {
    const list = await this.service.list()
    return this.success(list)
  }

  @Post('/page')
  async page(@Body() data) {
    const res = await this.service.page(data)
    return this.success(res)
  }

  @Post('/info')
  async info(@Body() data) {
    console.log(data, 'data')
    const res = await this.service.info(data)
    return this.success(res)
  }

  @Post('/add')
  async add(@Body() data: User) {
    const res = await this.service.add(data)
    return this.success(res)
  }

  @Post('/update')
  async update(@Body() data: User) {
    await this.service.update(data)
    return this.success()
  }

  @Post('/login')
  async login(@Body() data: User) {
    const res = await this.service.login(data)
    return this.success(res)
  }

  @Post('/getCaptchaImage')
  async getCaptchaImage(@Body() data: User) {
    const res = await this.service.getImageCaptcha()
    return this.success(res)
  }
}
