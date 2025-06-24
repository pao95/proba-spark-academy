
import { useState } from 'react';
import { Upload, Send, Loader } from 'lucide-react';

export const CustomExerciseInput = () => {
  const [problemText, setProblemText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [solution, setSolution] = useState('');

  const handleTextSubmit = async () => {
    if (!problemText.trim()) return;
    
    setIsLoading(true);
    // Simulate API call to OpenAI
    setTimeout(() => {
      setSolution(`AI Solution for: "${problemText}"\n\nStep 1: Identify the problem type\nThis appears to be a probability/statistics problem.\n\nStep 2: Apply relevant formulas\n[Mathematical solution would appear here]\n\nStep 3: Calculate the result\n[Detailed calculations would appear here]\n\nStep 4: Interpret the result\n[Explanation of what the result means in context]`);
      setIsLoading(false);
    }, 2000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate image processing
      console.log('Processing image:', file.name);
      setIsLoading(true);
      setTimeout(() => {
        setSolution(`AI Solution from uploaded image:\n\nStep 1: Image analysis\nExtracted problem: [Problem text from image]\n\nStep 2: Problem identification\n[Type of statistical problem identified]\n\nStep 3: Solution approach\n[Methodology and formulas to use]\n\nStep 4: Detailed solution\n[Step-by-step solution process]\n\nStep 5: Final answer and interpretation\n[Final result with explanation]`);
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Custom Problem Solver</h2>
        <p className="text-gray-600 mb-6">
          Upload an image of your problem or type it directly. Our AI will solve it step-by-step.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-3">Type Your Problem</h3>
            <textarea
              value={problemText}
              onChange={(e) => setProblemText(e.target.value)}
              placeholder="Enter your probability or statistics problem here..."
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] resize-vertical"
            />
            <button
              onClick={handleTextSubmit}
              disabled={!problemText.trim() || isLoading}
              className="mt-3 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? <Loader className="animate-spin" size={18} /> : <Send size={18} />}
              <span>{isLoading ? 'Solving...' : 'Solve Problem'}</span>
            </button>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 mb-3">Upload Image</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <Upload className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 mb-4">
                Drag and drop an image here, or click to select
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors"
              >
                Select Image
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {solution && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">AI Solution</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">{solution}</pre>
          </div>
        </div>
      )}
    </div>
  );
};
