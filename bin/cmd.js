#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var argv = require('yargs')
        .boolean('s')
        .alias('s', 'silent')
        .describe('s', 'print empty string instead of erroring out')
        .argv

var pkg = path.join(process.cwd(), 'package.json')

var field = argv._[0] || 'name'

fs.readFile(pkg, 'utf8', function(err, data) {
    if (err) {
        if (argv.s)
            process.stdout.write('')
        else
            throw new Error(err)            
    } else {
        try {
            var p = JSON.parse(data)
            process.stdout.write(p[field]||'')
        } catch (e) {
            if (argv.s)
                process.stdout.write('')
            else
                throw new Error(e)
        }
    }
        
})
