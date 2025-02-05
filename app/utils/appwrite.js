import { Client, Databases } from 'appwrite'

export const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('67a35b5a002e55891f93')

export const databases = new Databases(client)