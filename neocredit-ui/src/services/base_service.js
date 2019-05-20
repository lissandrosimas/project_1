export default class BaseService {
   getErrors(error) {
      var errors = [];

      if (error && error.response) {
         if (error.response.status == 400 || error.response.status == 500) {
            var data = error.response.data;
            
            if (data.errors != undefined && data.errors.length > 0) {
               data.errors.forEach(function (item) {
                  errors.push({
                     field: item.field,
                     message: item.defaultMessage
                  });
               });
            } else if (data.success == 'false' || !data.success) {
               errors.push({
                  field: '',
                  message: data.message
               });
            }
         }
      }

      return errors;
   }
}
