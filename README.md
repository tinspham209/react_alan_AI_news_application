# Mini Project: Voice Controlled React News Application

### Tech-Stack

- React Hooks
- Alan AI Voice Assistant - @alan-ai/alan-sdk-web
- MaterialUI - @material-ui/core
- classnames
- words-to-numbers

### Introduction

- Alan AI is a revolutionary speech recognition software that allows you to add voice capabilities to your applications.
- It allows you to control absolutely everything in the app using your voice.
- Another huge benefit is that it's extremely easy to integrate it
- So Im going to build a Conversational Voice Controlled React News Application.

### Deploy

http://alan-ai-voice-assistant-209.surge.sh/

### Wire frame:

<img src="https://i.imgur.com/DHZwMT1.png" />

### Function

- Give the news
  - Latest news.
  - News by Categories : Business, Entertainment, General, Health, Science, Sports, Technology
  - News by Terms: Covid-19, PlayStation 5, Smartphones,...
  - News by Sources: CNN, ABC News,....
- And you can choose
  - Read news by yourself
  - Or Alan AI Voice Assistant can help you to read that
- Gives responses to casual conversation

### Resources

- https://alan.app
- API news: https://newsapi.org/

### Screenshot

<img src="https://media.giphy.com/media/kHxwr6ohazm1FQwyuX/giphy.gif" />

### After this project

I have improve for myself about

- Fetch API with async await
- Responsive, Grid, Grow with `Material-UI`
- styles component with `Material-UI`
- Write CSS by makeStyles with `Material-UI`
- Merge different className to one with `classnames`

I have understand about

- using voice to get data from API
- `words-to-numbers`
  - convert words string to number
  - guess the word has same sound to the true number (such as: for ~> 4)
- Scroll windows to article currently reading
- using voice to opening the new URL
- Make casual conversation that we didn't set up in our original script

Next step:

- Update API news that have news in vietnam

Bugs:

- Deploy to surge.sh, but CAN'T use voice `getUserMedia is not supported`

### Set up

`npm install` and `npm start`

- Replace: [API_KEY] and [alanKey]
