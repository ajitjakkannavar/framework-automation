
import { test, expect } from '@playwright/test';
const Logger=require('../utilities/Logger')
test('Test env', async ({ page }) => {

  const logger=new Logger()
 
  logger.info('Starting API test')
  logger.success('Login successful')
  logger.debug('Response status: 200')
  logger.error('API request failed')
  logger.warning('Token is about to expire')

  // console.log(process.env.BASE_URL)
  // console.log(process.env.USERNAME)
});

