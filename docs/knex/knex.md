# Knex SQL QUERY BUILDER
- [official documentation](https://knexjs.org/guide/)
- [initiaconfig](#initial-config)
- [select all](#select-all)
- [select by id](#select-by-id)
- [delete and update](#delete-and-update)
- [list view](#list-view)
- [delete view](#delete-view)
- [delete endpoint](#delete-endpoint)
- [update endpoints](#update-endpoints)
 

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





### LIST VIEW
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
### DELETE VIEW

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
## DELETE ENDPOINT
```angular2html
app.delete('/groups/:id', async (req, res)=> {

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

### UPDATE ENDPOINTS
Show update FORM when accessed via GET
Firs check element to be updated exists.
Then show updating form
```
app.get('/albums/update/:id', async (req, res) => {

    // id should be found . Otherwise an error must be returned
    try {
        // get id from rpoute params
        const id = req.params.id;

        const albums = await knex('Albums').where({id})
        
        // this should not happen since it comes from a view
        // showing already existing album but we should protect against
        if (albums.length == 0) {
            // An error view should be rendered
            res.status(404).send('Item not found');
        }

        // get all groups to offer changing groups
        const groups = await knex('Groups')
        const options = {
            title: 'Update album',
            album:albums[0],
            groups:groups
        }
        res.render('update_album', options)
    } catch (e) {

        console.log(e)
        res.status(500).send('ERROR'+ e.message)
    }
});
```
Receive parameters from update FORM

```angular2html
app.post('/albums/update/', async (req, res) => {
const {id, title, image, idGroup, description} = req.body; // Assuming parameters has `role` and `name` are present in the form

    try {
        const album = await knex('Albums').where({id}).first()
        if (!album) {
            res.status(404).send('not found')
        }
        const updateCount = await knex('albums')
            .update({id, title, image, idGroup, description})
            .where({id})

        if (updateCount) {
            res.status(201).redirect('/albums')
        } else {
            res.status(404).send({success: false, message: 'Group not found.'});
        }

    } catch (e) {
        console.log(e)
        res.status(500).send({success: false, message: e.message});
    }
});
```
