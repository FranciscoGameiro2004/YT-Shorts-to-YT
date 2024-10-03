# YT Shorts to YT

"YT Shorts to YT" is a script that aims to avoid doomscrolling while watching shorts on YouTube. It works by changing the type of player that is used on the website.

## Technical Details
Youtube's website has 2 kinds of players:
- Normal player
    The one that most of us know the most. The player is usually made for non-short videos (including the ones that are premiered) and livestreams. The player can also be used for watching shorts with a workaround.
    A link for a video that uses that kind of player looks like this: https://www.youtube.com/watch?v= `{VIDEO ID}`
- Shorts player
    This player was recently implemented because of the launch of YouTube Shorts - a format that focuses on vertical videos with 60 seconds or less that was created in 2020 to compete with TikTok. This player can only be used to watch shorts.
    A link for a video that uses that kind of player looks like this: https://www.youtube.com/shorts/ `{VIDEO ID}`

To watch a short in the normal player, the script simply checks if a video url goes to the Shorts player. If that condition is true, the URL is changed by replace the substring `"shorts/"` by `"watch?v="`

## How to install?
1. You need to install [Tampermonkey](https://www.tampermonkey.net/) - An extention that allows to manage userscript code.
2. Select `YT Shorts to YT.user.js` in the at the "Releases" section of this repository. You can also check the file and click "Raw" to Download
3. You are redirected to a Tampermonkey's page where you can see the source code and choose to install. To install the script, click the "Install" button.
4. Voilá!