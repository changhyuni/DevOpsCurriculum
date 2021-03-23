exports.handler = async (event) => {
    // TODO implement
    const user = {username:'changhyun'}
    const response = {
        statusCode: 200,
        body: JSON.stringify(user),
    };
    return response;
  };
  