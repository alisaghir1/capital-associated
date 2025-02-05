import { Client, Databases } from 'appwrite'

export const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6763f3a4000704521b98')

export const databases = new Databases(client)