function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.example.com")) {
    return "PROXY 203.0.113.45:8080";
  }
  return "DIRECT";
}
