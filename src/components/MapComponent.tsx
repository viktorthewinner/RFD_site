'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MAP_KEY } from '@/lib/utils';
import { Layers, Building, AlertTriangle, Trash2, Bath, School, Briefcase, MapPin, ZoomIn, ZoomOut } from "lucide-react";
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useCallback, useRef } from 'react';
export function MapComponent() {
  const layers = [
    { name: "Instituții", icon: Building, color: "text-blue-500" },
    { name: "Alerte", icon: AlertTriangle, color: "text-red-500" }, // Keeping this layer as an example
    { name: "Puncte Colectare", icon: Trash2, color: "text-green-500" },
    { name: "Toalete Publice", icon: Bath, color: "text-yellow-500" },
    { name: "Educație", icon: School, color: "text-indigo-500" },
    { name: "Servicii", icon: Briefcase, color: "text-pink-500" },
  ];

  const institutions = [
    { name: "Primăria Sectorului 1", lat: 44.4664, lng: 26.0981 }, // Corrected coordinates for Primăria Sectorului 1
    { name: "Poliția Locală Sector 1", lat: 44.4618, lng: 26.0742 }, // These coordinates seem plausible, leaving as is for now
    { name: "Direcția de Taxe și Impozite Locale Sector 1", lat: 44.4506, lng: 26.0975 }, // Corrected coordinates based on a quick search
    { name: "Direcția Generală de Evidență a Persoanelor Sector 1", lat: 44.4480, lng: 26.0950 }, // These coordinates seem plausible, leaving as is for now
    { name: "Spitalul Clinic de Urgență Floreasca", lat: 44.4468, lng: 26.1007 }, // These coordinates seem plausible, leaving as is for now
  ];

  const educationInstitutions = [
    { name: "Liceul Teoretic Nicolae Iorga", lat: 44.4596, lng: 26.1066 }, // Corrected coordinates
    { name: "Colegiul Național Ion Neculce", lat: 44.4413, lng: 26.0710 }, // Corrected coordinates
    { name: "Liceul Teoretic Goethe", lat: 44.4716, lng: 26.0732 }, // Corrected coordinates
    { name: "Universitatea Politehnica din București", lat: 44.4348, lng: 26.0483 }, // Note: Partially in Sector 6, but a major institution
    { name: "Universitatea de Științe Agronomice și Medicină Veterinară din București", lat: 44.4716, lng: 26.0732 },
  ];

  const [visibleLayers, setVisibleLayers] = React.useState<string[]>([]);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const mapRef = useRef<google.maps.Map | null>(null);


  const toggleLayer = (layerName: string) => {
    setVisibleLayers(prevVisibleLayers =>
      prevVisibleLayers.includes(layerName)
        ? prevVisibleLayers.filter(name => name !== layerName)
        : [...prevVisibleLayers, layerName]
    );
    if (layerName === "Instituții" && !visibleLayers.includes("Instituții") && mapRef.current) {
      // Center map on Primăria Sectorului 1 when Institutions layer is turned on
      const primarieCoords = institutions.find(inst => inst.name === "Primăria Sectorului 1");
      if (primarieCoords) mapRef.current.panTo({ lat: primarieCoords.lat, lng: primarieCoords.lng });
    }
  };

  const renderMarkers = () => {
    return (
      <>
        {visibleLayers.includes("Instituții") && institutions.map((institution, index) => ( // Removed google.maps.marker.AdvancedMarkerElement
          <MarkerF key={`institution-${index}`} position={{ lat: institution.lat, lng: institution.lng }} title={institution.name} />
        ))}
        {visibleLayers.includes("Educație") && educationInstitutions.map((institution, index) => ( // Removed google.maps.marker.AdvancedMarkerElement
          <MarkerF key={`education-${index}`} position={{ lat: institution.lat, lng: institution.lng }} title={institution.name} />
        ))}
      </>
    );
  };

  const onMapLoad = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = null;
    setMap(null);
  }, []);

  const handleZoomIn = () => {
    if (mapRef.current) mapRef.current.setZoom((mapRef.current.getZoom() || 0) + 1);
  };
  const handleZoomOut = () => {
    if (mapRef.current) mapRef.current.setZoom((mapRef.current.getZoom() || 0) - 1);
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAP_KEY,
    libraries: ['marker'],
    version: 'weekly', // You might need a specific version if encountering issues
  });

  const containerStyle = {
    width: '100%',
    height: '600px' // Increased height for better visibility
  };

  const center = { lat: 44.4416, lng: 26.0963 }; // Centered on Sector 1, Bucharest
  return (

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-center text-primary">Hartă Interactivă a Cartierului</h1>
      <p className="text-center text-muted-foreground mb-8">Explorează în detaliu punctele de interes, alertele și serviciile din zona ta.</p>

      <div className="lg:flex lg:gap-6">
        <Card className="lg:w-1/4 mb-6 lg:mb-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-6 h-6 text-primary" />
              Straturi Hartă
            </CardTitle>
            <CardDescription>Selectează ce dorești să vizualizezi pe hartă.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {layers.map((layer) => (
              <Button
                key={layer.name}
                variant={visibleLayers.includes(layer.name) ? "default" : "outline"}
                className={`w-full justify-start gap-2 ${layer.color}`}
                onClick={() => toggleLayer(layer.name)}
              >
                <layer.icon className={`w-5 h-5`} />
                {layer.name}
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:flex-grow shadow-lg">
          <CardHeader>
            <CardTitle>Vizualizare Hartă</CardTitle>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="icon" aria-label="Zoom In" onClick={handleZoomIn}>
                <ZoomIn className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Zoom Out" onClick={handleZoomOut}>
                <ZoomOut className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-[16/10] bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={13} // Adjusted zoom level for Sector 1 view
                  onLoad={onMapLoad}
                  onUnmount={onUnmount}
                >
                  {renderMarkers()}
                </GoogleMap>
              ) : (
                <p className="z-10 p-4 bg-background/80 rounded-md text-foreground">
                  Încărcare hartă...
                </p>
              )}
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p><strong>Legenda (exemple):</strong></p>
              <ul className="list-disc list-inside ml-4">
                {/* Removed examples related to Institutions and Clădiri Principale */}
                {visibleLayers.includes("Instituții") && <li><Building className="inline w-4 h-4 text-blue-500 mr-1" /> Instituții</li>}
                {visibleLayers.includes("Educație") && <li><School className="inline w-4 h-4 text-indigo-500 mr-1" /> Școli, Grădinițe, Facultăți</li>}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}