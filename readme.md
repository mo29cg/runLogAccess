# What is this?

This is a formatter that improves accessibility of github actions log which you get from `gh run view <runNumber> --log`

# Enviroment

This works best with VsCode and [IndentNav addon](https://github.com/mltony/vscode-indent-nav).

# HOW TO USE

Add function like this to `~/.bashrc`

```
grl(){
    gh run view $1 --log | sed -r "s/\x1B\[([0-9]{1,2}(;[0-9]{1,2})*)?m//g" | ts-node $HOME/path/to/runLogAccess/format.ts &> /path/to/output.txt
}
```

`sed -r "s/\x1B\[([0-9]{1,2}(;[0-9]{1,2})*)?m//g" ` is for stripping out color code.
