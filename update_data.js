function updateCityData(cities) {
    // Creating a map grouping entries by coordinates
    var groupedDataMap = new Map();
    cities.forEach(function(entry) {
        const similarNumber = 3;
        var key = entry.latitude.toFixed(similarNumber) + '-' + entry.longitude.toFixed(similarNumber);
        if (!groupedDataMap.has(key)) {
            groupedDataMap.set(key, []);
        }
        groupedDataMap.get(key).push(entry);
    });

    // Creating updated data with combined dates
    var updated_cities = [];
    groupedDataMap.forEach(function(entries, key) {
        var combinedDates = entries.map(function(entry) {
            return entry.date;
        }).join('<br>');

        var uniqueNames = Array.from(new Set(entries.map(function(entry) {
            return entry.name;
        }))).join('/');

        var firstEntry = entries[0];
        var combinedEntry = {
            name: uniqueNames,
            date: combinedDates,
            latitude: firstEntry.latitude,
            longitude: firstEntry.longitude,
            radius: firstEntry.radius,
            fillKey: firstEntry.fillKey
        };

        updated_cities.push(combinedEntry);
    });

    return updated_cities;
}


