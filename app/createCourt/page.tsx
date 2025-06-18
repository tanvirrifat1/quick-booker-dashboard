"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  User,
  Plus,
  X,
} from "lucide-react";

const bookingData = {
  name: "df6545",
  price: 60,
  address: "789 Arena Ave, City Center, CA 90210",
  slotTime: "90 minutes",
  image: "dsfsfdsf",
  availableSlots: [
    {
      date: "2025-02-23",
      slots: [{ time: "08:00 AM" }, { time: "09:30 AM" }, { time: "11:00 AM" }],
    },
    {
      date: "2025-02-24",
      slots: [{ time: "08:00 AM" }, { time: "09:30 AM" }],
    },
  ],
};

interface TimeSlot {
  id: string;
  date: string;
  time: string;
}

export default function createCourt() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTimeSlot = () => {
    if (!currentDate || !currentTime) {
      alert("Please select both date and time");
      return;
    }

    // Check if this date/time combination already exists
    const exists = timeSlots.some(
      (slot) => slot.date === currentDate && slot.time === currentTime
    );
    if (exists) {
      alert("This time slot is already selected");
      return;
    }

    const newSlot: TimeSlot = {
      id: Date.now().toString(),
      date: currentDate,
      time: currentTime,
    };

    setTimeSlots([...timeSlots, newSlot]);
    setCurrentDate("");
    setCurrentTime("");
  };

  const removeTimeSlot = (id: string) => {
    setTimeSlots(timeSlots.filter((slot) => slot.id !== id));
  };

  const formatDateTime = (date: string, time: string) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return `${formattedDate} at ${time}`;
  };

  const getTotalPrice = () => {
    return timeSlots.length * bookingData.price;
  };

  const handleBooking = () => {
    if (timeSlots.length === 0 || !customerInfo.name || !customerInfo.email) {
      alert(
        "Please add at least one time slot and fill in all required fields"
      );
      return;
    }

    console.log("Booking Details:", {
      venue: bookingData.name,
      timeSlots: timeSlots,
      totalSlots: timeSlots.length,
      duration: bookingData.slotTime,
      pricePerSlot: bookingData.price,
      totalPrice: getTotalPrice(),
      customer: customerInfo,
      image: selectedImage?.name || "No image uploaded",
    });

    alert(
      `Booking submitted successfully! Total: $${getTotalPrice()} for ${
        timeSlots.length
      } time slot(s)`
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Multiple Time Slots Selection */}
      <Card className="bg-white text-black shadow-md rounded-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Add Multiple Time Slots & Upload Image
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Add New Time Slot */}
          <div className="border rounded-lg p-4 space-y-4">
            <h3 className="font-semibold">Add New Time Slot</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Select Date</Label>
                <Input
                  type="date"
                  id="date"
                  value={currentDate}
                  onChange={(e) => setCurrentDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Select Time</Label>
                <Input
                  type="time"
                  id="time"
                  value={currentTime}
                  onChange={(e) => setCurrentTime(e.target.value)}
                />
              </div>
            </div>
            <Button
              onClick={addTimeSlot}
              className="w-full"
              variant="outline"
              disabled={!currentDate || !currentTime}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Time Slot
            </Button>
          </div>

          {/* Selected Time Slots */}
          {timeSlots.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-semibold">
                Selected Time Slots ({timeSlots.length})
              </h3>
              <div className="space-y-2">
                {timeSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">
                        {formatDateTime(slot.date, slot.time)}
                      </span>
                      <Badge variant="secondary">${bookingData.price}</Badge>
                    </div>
                    <Button
                      onClick={() => removeTimeSlot(slot.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Image Upload */}
          <div className="space-y-2">
            <Label htmlFor="image">Upload Image (Optional)</Label>
            <Input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {imagePreview && (
              <div className="relative">
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="Preview"
                  className="mt-2 max-h-32 rounded-lg object-cover"
                />
                <Button
                  onClick={() => {
                    setSelectedImage(null);
                    setImagePreview("");
                  }}
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-red-600 text-white hover:bg-red-700"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Customer Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Customer Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={customerInfo.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={customerInfo.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={customerInfo.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Booking Summary */}
      {timeSlots.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Venue:</span>
                <span className="font-medium">{bookingData.name}</span>
              </div>

              <div className="space-y-2">
                <span className="font-medium">Selected Time Slots:</span>
                {timeSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className="ml-4 flex justify-between text-sm"
                  >
                    <span>{formatDateTime(slot.date, slot.time)}</span>
                    <span>${bookingData.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <span>Duration per slot:</span>
                <span className="font-medium">{bookingData.slotTime}</span>
              </div>

              <div className="flex justify-between">
                <span>Number of slots:</span>
                <span className="font-medium">{timeSlots.length}</span>
              </div>

              {selectedImage && (
                <div className="flex justify-between">
                  <span>Image uploaded:</span>
                  <span className="font-medium text-green-600">
                    ✓ {selectedImage.name}
                  </span>
                </div>
              )}

              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-green-600">${getTotalPrice()}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleBooking}
              className="w-full"
              size="lg"
              disabled={
                timeSlots.length === 0 ||
                !customerInfo.name ||
                !customerInfo.email
              }
            >
              Confirm Booking ({timeSlots.length} slot
              {timeSlots.length !== 1 ? "s" : ""})
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
