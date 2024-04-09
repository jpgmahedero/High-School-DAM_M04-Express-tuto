# MONGO DB
- [Installation](#installation)
- [DB Connection](#connection-to-the-database)
- [Usage](#usage)

### Installation

```angular2html
npm install mongoose
```
### DB Connection
   1. Connect
 
   ![get connection string](/home/jose/Documents/dev/node/DAM_M04/docs/img/get_connection_string.png)
   2. Copy connection String

```angular2html
mongoose.connect("mongodb://IP:PORT/DB?retryWrites=true&w=majority")
```
Example

```angular2html
mongoose.connect("mongodb://127.0.0.1:27017/Musica?retryWrites=true&w=majority")

```

### USAGE
3. Define models (center) into models folders (left) and import them (right)
   ![Alt text](/home/jose/Documents/dev/node/DAM_M04/docs/img/mongoose_usage.png)
