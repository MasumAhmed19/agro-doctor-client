import React, { useState } from 'react';
import { Camera, Upload, AlertCircle, Loader2 } from 'lucide-react';

const DiseaseIdentify= ()=> {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState([]);

  // Demo data for illustration
  const demoResults = [
    {
      name: "Bacterial Leaf Blight",
      confidence: 95.8,
      description: "A serious bacterial disease affecting rice plants, characterized by yellow to white lesions along the leaf veins.",
      cure: "Apply copper-based bactericides and ensure proper field drainage. Remove infected plants and maintain good field hygiene."
    },
    {
      name: "Powdery Mildew",
      confidence: 87.2,
      description: "A fungal disease causing white powdery spots on leaves and stems.",
      cure: "Apply fungicides containing sulfur or potassium bicarbonate. Improve air circulation around plants."
    }
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResults(demoResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  const openCamera = () => {
    document.getElementById('camera-input').click();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden">
        <img 
          src="https://i.ibb.co.com/V0XnnS8D/false-smut-in-rice.jpg"
          alt="Farming Background"
          className="w-full h-[300px] object-cover brightness-40"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Diseases Identify</h1>
          <p className="text-lg max-w-2xl">
            Get personalized crop suggestions based on your selected location and planting schedule
          </p>
        </div>
      </div>


      {/* Upload Section */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
          <div>
            {/* Camera Button */}
          <button 
            onClick={openCamera}
            className="w-full bg-gray-800 text-white py-3 rounded-lg mb-4 flex items-center justify-center gap-2"
          >
            <Camera className="h-5 w-5" />
            Open Camera
          </button>

          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageUpload}
            id="camera-input"
            className="hidden"
          />

          <h2 className="text-xl text-green-600 mb-4">Upload Crop Image</h2>
          
          {/* Upload Area */}
          <div className="border-2 border-dashed border-green-400 rounded-lg p-8 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer block"
            >
              <div className="flex flex-col items-center">
                <Upload className="h-8 w-8 text-gray-400 mb-3" />
                <span className="text-gray-600">Click here to upload an image</span>
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <button 
            className={`w-full mt-4 py-3 rounded-lg text-white text-lg ${
              selectedImage ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300'
            }`}
            disabled={!selectedImage}
          >
            Submit
          </button>

          {/* Preview Section */}
          {selectedImage && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-3">Uploaded Image</h2>
              <img
                src={selectedImage}
                alt="Uploaded plant"
                className="max-h-64 rounded-lg mx-auto"
              />
            </div>
          )}
          </div>
          
          <div>
            
            {/* Analysis Section */}
            {isAnalyzing ? (
              <div className="text-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-3" />
                <p className="text-gray-600">Analyzing your image...</p>
              </div>
            ) : results.length > 0 && (
              <div className="space-y-6 mt-6">
                <h2 className="text-xl font-semibold border-b pb-2">Analysis Results</h2>
                {results.map((disease, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {disease.name}
                          <span className="ml-2 text-sm text-gray-500">
                            ({disease.confidence.toFixed(1)}% confidence)
                          </span>
                        </h3>
                        <p className="text-gray-600 mt-1">{disease.description}</p>
                        <div className="mt-3">
                          <h4 className="font-medium text-gray-800">Recommended Treatment:</h4>
                          <p className="text-gray-600">{disease.cure}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
export default DiseaseIdentify;