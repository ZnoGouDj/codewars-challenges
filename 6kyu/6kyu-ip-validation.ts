// Pure function
function isValidIP(str: string): any {
  const octets = str.split('.'); // Split into octets
  return (
    octets.length === 4 && // Ensure str has exactly 4 octets
    octets.reduce(
      (
        acc,
        octet, // Check all octets
      ) =>
        acc === true && // Ensure prior octets okay
        String(Number(octet)) === octet && // Ensure octet has nothing funky like spaces, leading 0's, ...
        Number(octet) >= 0 && // Ensure octet is 0 or more
        Number(octet) <= 255, // Ensure octet is 255 or less
      true,
    )
  );
}
