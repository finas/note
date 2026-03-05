https://github.com/asmvik/skhd


`zed $HOME/.skhdrc`

```
ctrl - h : skhd -k "left"
ctrl - j : skhd -k "down"
ctrl - k : skhd -k "up"
ctrl - l : skhd -k "right"
```

### troubleshooting

`cat /tmp/skhd_$USER.err.log`  

`cat /tmp/skhd_$USER.out.log`



### Common Error Messages to Look For

Once you open the log, look for these specific "red flags":

| Error Message | Meaning | Fix |
| --- | --- | --- |
| `could not lock pid-file!` | Another instance of `skhd` is already running. | Run `skhd --stop-service` or `killall skhd`. |
| `could not open file '/Users/.../.skhdrc'` | It can't find your config file. | Ensure your file is at `~/.skhdrc` or `~/.config/skhd/skhdrc`. |
| `secure keyboard entry is enabled` | A terminal or password field is blocking input. | Disable "Secure Keyboard Entry" in your Terminal/iTerm settings. |
| `accessibility permissions not granted` | macOS is blocking the app from seeing keys. | Remove and re-add `skhd` in Privacy & Security settings. |

