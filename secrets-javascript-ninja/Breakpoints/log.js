/**
 * Created by jsg665 on 11/7/2014.
 */

function log() {
    try {
        console.log.apply(console, arguments);
    }//end try
    catch(e) {
        try {
            opera.postError.apply(opera, arguments);
        }//end try
        catch(e){
            alert(Array.prototype.join.call( arguments, " "));
        }//end inner catch
    }//end catch
}//end log()
