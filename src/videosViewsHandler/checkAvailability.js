import consoleMessage from '../../utils/consoleMessage.js';

async function checkAvailability(page, playvideoBtn) {
  try {
      await page.waitForSelector(playvideoBtn)
      return true
    } catch { 
      consoleMessage(
        'error', 
        'No Like button found after reload due to probably no more videos being available to watch right now.'
      )
      consoleMessage('info', 'Application will sleep for 10 minutes and then try again');
      return false
    }
}

export default checkAvailability