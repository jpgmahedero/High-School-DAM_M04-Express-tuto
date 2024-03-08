# Knex SQL QUERY BUILDER
- [official documentation](https://knexjs.org/guide/    )
- [how to](https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application)
- [partials](https://progressivecoder.com/nodejs-templating-using-express-ejs-with-partials/#6-express-ejs-partials)

## Initial config

1. installation
```angular2html
npm install knex
```
2. Configuration (If we're using sqlite with mydb.sqlite file)
```angular2html
const knex = require('knex')({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: "./mydb.sqlite"
  }
})
```

Note that for using sqlite3 as dbms (database management system) you should also installed sqlite3 package

```angular2html
npm install sqlite3
```

## Select All
```angular2html

app.get('/XXX', async (req, res) => {

    try {
        const result = await knex('table_name')
        const options = {
            ... ,
            ...
        }
        res.render(view, options)
    } catch (e) {
        console.log(e)
        res.status(500).send('ERROR')
    }
})
``` 

## Select by Id
```angular2html
...
conts id  = ...
const album = await knex('Albums').where({id})
``` 

## DELETE
```angular2html
pp.delete('/groups/:id', async (req, res)=> {

    // ǵet params from body
    const id = parseInt(req.params.id);

    try{
        
        // DELETE FROM TABLE WHERE TABLE.id = id
        const result = await knex(TABLE)
            .where({id})
            .delete()
        
        if (result) {
            res.redirect('/....')
        } else {
            res.status(404).send({success: false, message: 'id not found.'});
        }

    }catch (e) {
        console.log(e)
        res.status(500).send('ERROR'+ e.message)
    }
})
```


## DELETE AND UPDATE

### VIEW
```angular2html 
            ...
            ...
            <td><a href="#" class="delete-link" data-group-id="<%= group.id %>">Delete</a>
                <a href="/groups/update/<%= group.id %>">Update</a></td>
        </tr>
    <% }); %>

    </tbody>
</table>
```
### DELETE

```angular2html
<script>

    async  function delete_group(event) {
        // stop defautl behaviour which would be
        // follow link
        event.preventDefault();

        // get id buolt into data-group-id attibute
        let groupId = this.getAttribute('data-group-id')
        
        // build url
        var url = '/groups/' + groupId;
        console.log('url' + url)
        try {
            const response = await fetch(url, {
                method: 'DELETE'
            });
            
            // In case it is ok reload page
            window.location.reload();

        } catch (error) {
            // Handle errors that occur during fetch
            console.error("Error:", error);
        }
    }

    // add listener to ALL .delete-link class
    // when clicked delete_group function wil be called
    $(document).ready( function (){
        $('.delete-link').on('click', delete_group);
    });

</script>

</body>
```

### UPDATE
```angular2html
app.get('/albums/update/:id', async (req, res) => {
    
    // id should be found . Otherwise an error must be returned
    try {
        const id = req.params.id;

        // Get the actual Album being updated
        // SELECT 'Albums.id', 'title', 'image', 'idGroup', 'description'
        // FROM Albums
        // WHERE Albums.id = id
        const albums = await knex('Albums')
            .select('Albums.id', 'title', 'image', 'idGroup', 'description').where('id', '=', id)

        // Get all Groups in order to make them avilable
        const groups = await knex('Groups')

        const options = {
            title: 'Group List',
            album: albums[0], // albums is a list
            groups: groups
        }
        res.render('update_album', options)
    } catch (e) {
        console.log(e)
        res.status(500).send('ERROR')
    }
})

```

