export function getParam(url:string) {
    return url.toString().split('/').pop();
}