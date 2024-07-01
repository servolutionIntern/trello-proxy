<!DOCTYPE html>
<html>
<head>
  <title>Trello Proxy</title>
</head>
<body>
  <script>
    async function forwardRequest(event) {
      event.preventDefault();

      const payload = {
        cardName: "Example Card",
        cardDesc: "This is a test description",
        listName: "Example List"
      };

      const response = await fetch(`https://api.github.com/repos/servolutionIntern/trello-proxy/dispatches`, {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.everest-preview+json',
          'Authorization': 'token YOUR_GITHUB_TOKEN',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_type: 'trello_webhook',
          client_payload: payload
        })
      });

      console.log(await response.json());
    }

    forwardRequest(event);
  </script>
</body>
</html>
