class UserServiceModule extends HttpFactory {
  private readonly RESOURCE = ''

  fetchAllUsers() {
    return this.call<any[]>({
      method: 'GET',
      url: `${this.RESOURCE}/users`,
    })
  }
}

export { UserServiceModule }
