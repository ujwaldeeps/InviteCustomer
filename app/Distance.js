function calculateDistance(latA, lonA, latB, lonB) {
    const R = 6371; // for km
    const dLat = (latB-latA) * Math.PI / 180;
    const dLon = (lonB-lonA) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(latA * Math.PI / 180 ) * Math.cos(latB * Math.PI / 180 ) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    // if (d>1) return Math.round(d)+"km";
    // else if (d<=1) return Math.round(d*1000)+"m";
    return distance;
}

module.exports = {
    calculateDistance
}