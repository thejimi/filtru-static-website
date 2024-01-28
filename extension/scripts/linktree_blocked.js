setTimeout(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    document.getElementById("domainname").innerHTML = `be careful.`
    document.getElementById("sub").innerHTML = `Linktree websites often redirect to nsfw content`
    document.getElementById("ignorebtn").addEventListener("click", ignore);
}, 500);

function ignore(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const url = urlParams.get("url")
  window.location.href = (`${url}&Filtru_Allowed_Linktree=true`)
}